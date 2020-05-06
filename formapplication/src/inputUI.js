import React from 'react'

function InputsUI(props){
    return(
        <main>
        <div className='text-fields'>
                <input
                className='textField'
                type='text'
                name='textField'
                value={props.data.textField}
                onChange={props.data.handleChange}
                />
                
                <br/>

                <input
                className='textField1'
                type='text'
                name='textField1'
                value={props.data.textField1}
                onChange={props.data.handleChange}
                />

                <br/>
                <input
                className='ageField'
                type='text'
                name='ageField'
                value={props.data.ageField}
                onChange={props.handleChange}
                />
                <label>
                    <input
                    type='checkbox'
                    name='isGlutenFree'
                    checked={props.data.isGlutenFree}
                    onChange={props.handleChange}
                    />
                    Gluten Free
                </label>
                <br/>
                <br/>
                <label>
                    <input
                    type='checkbox'
                    name='isKosher'
                    checked={props.data.isKosher}
                    onChange={props.handleChange}
                    />
                    Kosher
                </label>
                <br/>
                <br/>
                <label>
                    <input
                    type='checkbox'
                    name='isLactoseFree'
                    checked={props.data.isLactoseFree}
                    onChange={props.handleCheck}
                    />
                    Lactose Free
                </label>
                <br/>
                <br/>
                <label>
                    <input
                    type='checkbox'
                    name='isVegan'
                    checked={props.data.isVegan}
                    onChange={props.handleCheck}
                    />
                    Vegan
                </label>
                <h1>Your Name:</h1><h3>{props.data.textField1}</h3>
                <br/>
                <h1>Your Age:</h1><h3>{props.data.ageField}</h3>

                <h1>Dietary Restrictions:</h1>
                <h1>Gluten Free</h1><h2>{props.data.isGlutenFree ?  'Yes' : null}</h2>

                <h1>Kosher<h1><h2>{props.data.isKosher ?  'Yes' : null}</h2>

                <h1>Lactose Free<h1><h2>{props.data.isLactoseFree ?  'Yes' : null}</h2>

                <h1>Vegan<h1><h2>{props.data.isVegan ?  'Yes' : null}</h2>
            </div>
        </main>
    )
}

export default InputsUI