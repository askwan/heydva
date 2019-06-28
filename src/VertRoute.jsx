import React, { Component } from 'react'
import { connect } from 'dva'
import { Route,withRouter } from 'dva/router'

export class VertRoute extends Component {
  adjust=(path)=>{
    return path === '/page/children1'
  }
  render() {
    const {component,path} = this.props;
    return (
      <Route path={path} component={component} />
    )
  }
}

const mapStateToProps = (state) => ({
 ...state.page 
})

export default withRouter(connect(mapStateToProps)(VertRoute))
// export default withRouter(VertRoute)