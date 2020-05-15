import React, { Component } from 'react'
import { bindActionCreators } from 'redux' //* turn it a container
import { connect } from 'react-redux' //*

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { selectTab, showTabs } from '../common/tab/tabActions' //*
import { create } from './billingCycleActions'

import List from './billingCycleList'
import Form from './BillingCycleForm'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
      
    }
    render(){
        return(
            <div>
                <ContentHeader title='Ciclos de pagamento' small=' Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />

                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create}/>

                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form formCols='12 12'/>
                            </TabContent>
                            <TabContent id='tabDelete'><h1>Delete Content</h1></TabContent>
                                
                        </TabsContent>
                    </Tabs>

                </Content>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create /* disponivel em props.create */}, dispatch) //depois disso é possivel usar comWillMont
export default connect(null, mapDispatchToProps)(BillingCycle)
