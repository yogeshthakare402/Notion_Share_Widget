import React, { useState, useContext } from 'react';
import './InputField.css';
import { GrCircleQuestion } from 'react-icons/gr';
import { BsPersonCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './ContextApi';


function InputField() {
    let nevigate = useNavigate();
    const { persons, groups, selectedOption, setPerson, setGroups, setSelectedOption, addAccess, setAddAccess, setButtonClicked } = useContext(AppContext)

    const [input, setInput] = useState(0);
    const [pill, setPill] = useState(false);

    const onChangeSearch = (name) => {
        if (persons.includes(name) === true) {
            console.log(persons.includes(name))
            persons.filter((person) => {
                if (person === name) {
                    setPerson(person)
                    if (!addAccess.includes(person)) {
                        setAddAccess([...addAccess, person])
                    }
                }
                return setInput(1)

            })
        }

        if (groups.includes(name) === true) {
            console.log(groups.includes(name))
            groups.filter((group) => {
                if (group === name) {
                    setGroups(group)
                    setAddAccess([...addAccess, group])
                }
                return setInput(2)

            })
        }
    }

    const invitePerson = () => {
        setPill(true)
    }
    const removePerson = () => {
        setPill(false)
        setPerson(['Tom Cook', 'Arlene Mccoy'])
        setGroups(['Product', 'Engineering'])
        setInput(0)
    }
    const switchToShareWidget = () => {
        if (addAccess.length % 2 !== 0) {
            setAddAccess([...addAccess, selectedOption])
        }
        // console.log(addAccess)
        setButtonClicked(true)
        nevigate('/')
    }

    return (<div id='inputField'>
        <div id='inputFieldPage'>
            <div id='selectOption'>

                {pill && <div id='selectedPerson'><span>{persons}</span> <span onClick={removePerson}>X</span></div>}
                {!pill &&
                    <input type="text" name="user" id="user" placeholder='    Search emails, names or groups'
                        onChange={(e) => {
                            onChangeSearch(e.target.value)
                        }} />
                }
                <div className='selectInput'>
                    <select id='selectInput' onChange={(e) => { setSelectedOption(e.target.value) }}>
                        <option value="No Access">No access</option>
                        <option value="Full Access">Full access</option>
                        <option value="Can Edit">Can edit</option>
                        <option value="Can View">Can View</option>
                    </select>
                </div>
                <button onClick={switchToShareWidget}>Invite</button>
            </div>
            {input === 0 &&
                <div id='person'>
                    <h3>Select a person</h3>
                    {persons.map((data, index) => {
                        return <h4 key={index}><BsPersonCircle /> {data}</h4>
                    })}
                </div>
            }
            {input === 1 &&
                <div id='person' onClick={invitePerson}>
                    <h3>Select a person</h3>
                    {<h4><BsPersonCircle /> {persons}</h4>}
                </div>
            }
            <hr />
            {input === 0 &&
                <div id='group'>
                    <h3>Select a group</h3>
                    {groups.map((data, index) => {
                        return <h4 key={index}><span className='groupIcon'>{data.slice(0, 1)}</span> {data}</h4>
                    })}
                </div>
            }

            {input === 2 &&
                <div id='group'>
                    <h3>Select a group</h3>
                    {<h4><span className='groupIcon'>{groups.slice(0, 1)}</span> {groups}</h4>}
                </div>
            }

            <div id='learnSharing'>
                <GrCircleQuestion id='learnLogo' />
                <h4>Learn about sharing</h4>
            </div>

        </div>
    </div>

    )
}
export default InputField