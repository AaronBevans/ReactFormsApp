import React from 'react'
import FormUI from './formUI'

class FormUILogic extends React.Component{
    constructor(){
        super()
        this.state = {
            textField:'',
            textField1:'',
            ageField:'',
            isGlutenFree:false,
            isKosher:false,
            isLactoseFree:false,
            isVegan:false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
    const {name, checked, type, value} = event.target
    type === 'checkbox' ? this.setState({[name]:checked}) : this.setState({[name]:value})
  }

    render(){
        return(
            <FormUI
            handleChange={this.handleChange}
            data={this.state}
            />
        )
    }
}


export default FormUILogic