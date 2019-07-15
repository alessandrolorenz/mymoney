import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './billingCycleActions'

class BillingCycleList extends Component {

    componentWillMount(){
        this.props.getList()
        // console.log(this.props.list) // assim que chama getList, chama o console.log, mas ainda carrega a lista, poois a chamada é assincrona
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => ( //retorna um jsx (ira para o render())
            <tr key={bc._id}>
                <td>{ bc.name }</td>
                <td>{ bc.month }</td>
                <td>{ bc.year }</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(bc)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(bc)}>
                        <i className='fa fa-trash-o'></i>
                    </button>

                </td>
               
            </tr>
        ))
    }

    render(){
       // console.log(this.props.list) // chama a primeira vez vasio e na segunda vez a lista é carregada, pois no index = applyMiddleware(promise)(createStore)(reducers, devTools)- resolve a promisse antes
        return(
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>Nome</td>
                            <td>Mês</td>
                            <td>Ano</td>
                            <td>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}{/* this é usado pois é contexto de classe - class BillingCycleList */}
                        {/* se fosse comp funcional, nao usava o this */}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.billingCycle.list})//this.props.list (pode vir vasio neste caso)
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch) //this.props.getlist()
export default connect(mapStateToProps, mapDispatchToProps)( BillingCycleList)