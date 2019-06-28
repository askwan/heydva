import React, { Component } from 'react'

import { connect } from 'dva'

export class index extends Component {


  render() {
    const {loading,global} = this.props;
    console.log(loading,global,'staging');
    return (
      <div>
        dva
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.global,state.loading.models)
  return {
    ...state.global,
    loading:state.loading.models.global
  }
}

export default connect(mapStateToProps)(index)
