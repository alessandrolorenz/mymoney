import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import If from '../operator/if'
import { selectTab } from './tabActions'

//componente que sera o conteudo da TabsHeader que é uma <lu>
class TabHeader extends Component {
    render(){
        const selected = this.props.tab.selected === this.props.target
        const visible = this.props.tab.visible[this.props.target]
        return(
            <If test={visible}>     
                <li className={selected ? 'active' : ''}>
                    <a href='javascript:;'
                    data-toggle='tab'
                    onClick={() => this.props.selectTab(this.props.target)}
                    data-target={this.props.target}>
                        <i className={`fa fa-${this.props.icon}`}></i>{this.props.label}
                    </a>
                </li>
            </If>
        )
    }
}
const mapStateToProps = state => ({tab : state.tab})//tab definido em reducers.js = tab: TabReducer
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)