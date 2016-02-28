import React from 'react'
import Model from './ModelAndView/Model'
import View from './ModelAndView/View'

Model.name = 'max'

export default () => (
  <div>
    <View>{Model}</View>
  </div>
)