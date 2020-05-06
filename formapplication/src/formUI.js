import React from 'react'

function FormUI(props){
    return(
        <main>
            <form>
                <input
                className='textField'
                type='text'
                name='textField'
                value={props.data.textField}
                onChange={props.handleChange}
                />

                <br/>
                <input
                className='textField'
                type='text'
                name='textField1'
                value={props.data.textField1}
                onChange={props.handleChange}
                />

                <br/>
                <input
                className='ageField'
                type='text'
                name='ageField'
                value={props.data.ageField}
                onChange={props.handleChange}
                />

                


                <h1>Your Name:</h1><h3>{props.data.textField} {props.data.textField1}</h3>
                <h1>Your Age:</h1><h3>{props.data.ageField}</h3>
                
                <h1>Dietary Restrictions</h1>
                <br/>
                <br/>
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
                    onChange={props.handleChange}
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
                    onChange={props.handleChange}
                    />
                    Vegan
                </label>
                <hr/>
                <h1>Gluten Free:</h1>{props.data.isGlutenFree ? 'Yes'  : null}

                <h1>Kosher:</h1>{props.data.isKosher ?  'Yes' : null}

                <h1>Lactose Free:</h1>{props.data.isLactoseFree ?  'Yes' : null}

                <h1>Vegan:</h1>{props.data.isVegan ?  'Yes' : null}
        </form>
        </main>
    )
}

export default FormUI