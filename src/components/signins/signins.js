import React from 'react'
import './signins.css'

function signins() {
    return (
        <div>
            <div align ='center' className ='flex-container'>
                <div className={'volunteer'}>
                <p className={'centered-text'}>If you want to help others and are a skilled 
                individual then go ahead and join to our volunteersâ€™ group.</p>
                    <button id = {'inf'} className = {'button-blue central'} href ='#info'>sign up as a volunteer</button>
                </div>
                <div className ={'empty'}></div>
                <div className={'company'}>
                <p className={'centered-text'}>If you require assistance or wish to plan an event,
                    then click here and find your volunteers from our platform.</p>
                    <button id = {'inf'} className = {'button-blue central'} href ='#info'>sign up as a company</button>

                </div>
            </div>
        </div>
    )
}

export default signins
