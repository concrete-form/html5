import React from 'react'

import {
  ControlLayoutProps,
  ErrorsLayoutProps,
  LabelLayoutProps,
  LabelledControlLayoutProps,
  ItemsGroupLayoutProps,
  ItemLabelLayoutProps,
} from '@concrete-form/html5/layout'

const Control: React.FC<ControlLayoutProps> = ({ name, control, errors }) => (
  <div className="custom-control">
    <div className="custom-control-control-wrapper">
      { control }
    </div>
    { errors && (
      <div className="custom-control-errors-wrapper">
        { errors }
      </div>
    ) }
  </div>
)

const Error: React.FC<ErrorsLayoutProps> = ({ errors }) => {
  return (
    <div className="custom-errors">
      { errors.join(',') }
    </div>
  )
}

const ItemLabel: React.FC<ItemLabelLayoutProps> = ({
  label,
  control,
  labelPosition = 'left',
}) => {
  return (
    <label className={`custom-item-label concreteform-${labelPosition as string}`}>
      <div>{ label }</div>
      <div>{ control }</div>
    </label>
  )
}

const ItemsGroup: React.FC<ItemsGroupLayoutProps> = ({
  items,
}) => {
  return (
    <div className="custom-items-group">
      { items }
    </div>
  )
}

const Label: React.FC<LabelLayoutProps> = ({
  label,
  htmlFor,
}) => {
  return (
    <label className="custom-label" htmlFor={htmlFor}>
      { label }
    </label>
  )
}

const LabelledControl: React.FC<LabelledControlLayoutProps> = ({
  control,
  label,
}) => {
  return (
    <div className="custom-labelled-control">
      <div>{ label }</div>
      <div>{ control }</div>
    </div>
  )
}

const layout = {
  control: Control,
  errors: Error,
  itemLabel: ItemLabel,
  itemsGroup: ItemsGroup,
  label: Label,
  labelledControl: LabelledControl,
}

export default layout
