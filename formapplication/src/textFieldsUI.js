import React from 'react'

function InputsUI(props){
    return(
        <main>
        <div className='text-fields'>
                <input
                className='textField'
                type='text'
                name='textField'
                value={this.state.textField}
                onChange={this.handleChange}
                />
                
                <br/>

                <input
                className='textField1'
                type='text'
                name='textField1'
                value={this.state.textField1}
                onChange={this.handleChange}
                />

                <br/>
                <input
                className='ageField'
                type='text'
                name='ageField'
                value={this.state.ageField}
                onChange={this.handleChange}
                />
                <div className='diet-checkboxes'>
                <label>
                    <input
                    type='checkbox'
                    name='isGlutenFree'
                    checked={this.state.isGlutenFree}
                    onChange={this.handleChange}
                    />
                    Gluten Free
                </label>
                <br/>
                <br/>
                <label>
                    <input
                    type='checkbox'
                    name='isKosher'
                    checked={this.state.isKosher}
                    onChange={this.handleChange}
                    />
                    Kosher
                </label>
                <br/>
                <br/>
                <label>
                    <input
                    type='checkbox'
                    name='isLactoseFree'
                    checked={this.state.isLactoseFree}
                    onChange={this.handleCheck}
                    />
                    Lactose Free
                </label>
                <br/>
                <br/>
                <label>
                    <input
                    type='checkbox'
                    name='isVegan'
                    checked={this.state.isVegan}
                    onChange={this.handleCheck}
                    />
                    Vegan
                </label>

            </div>

                

                <h1>Your Name:</h1><h3>{this.state.textField} {this.state.textField1}</h3>
                <br/>
                <h1>Your Age:</h1><h3>{this.state.ageField}</h3>

                <h1>Dietary Restrictions:</h1>
                <h1>Gluten Free:{this.state.isGlutenFree ?  'Yes' : null}</h1>

                <h1>Kosher:{this.state.isKosher ?  'Yes' : null}</h1>

                <h1>Lactose Free:{this.state.isLactoseFree ?  'Yes' : null}</h1>

                <h1>Vegan:{this.state.isVegan ?  'Yes' : null}</h1>
            </div>
        </main>
    )
}

export default InputsUI