import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import autobind from 'autobind-decorator'
import '../../../sass/custom.scss'

class Main extends Component {
    render() {
        return (
            <>
                <div
                    className='uk-position-cover uk-inline'
                    style={{
                        backgroundImage: 'url(' + './images/wall.jpg' + ')',
                        backgroundSize: 'cover'
                    }}
                >
                    <a
                        href='https://github.com/Russsstle'
                        target='_blank'
                        className='uk-icon-link uk-margin-small-top  uk-margin-small-left'
                        uk-icon='icon:github; ratio: 2'
                        uk-tooltip='title:See My Projects; pos:left'
                    />

                    <ul className='uk-position-center' style={{ color: 'white' }} uk-accordion='true'>
                        <li>
                            <div className='  uk-accordion-title'>
                                {/* <button
                                    className='uk-button uk-button-default'
                                    style={{ paddingTop: 10 }}
                                    uk-tooltip='Click to learn more about me'
                                    uk-tooltip='Click to learn more about me'
                                > */}
                                <h1 className='line-1 anim-typewriter top-fix' style={{ color: 'white' }}>
                                    Russell John Santos
                                </h1>
                            </div>

                            <div className='uk-accordion-content uk-container ' uk-grid='true'>
                                <div className='center'>
                                    <img
                                        className='shadow'
                                        src='./images/barong3.jpg'
                                        style={{
                                            height: 200,
                                            width: 150,
                                            borderRadius: 50
                                        }}
                                    />
                                </div>
                                <div className='center description'>
                                    <p className='sad  size'>
                                        Hello! I am just a junior web developer that constantly tries to learn
                                        new things, there is nothing much around here yet :( <br />
                                    </p>
                                    <p>Feel free to contact me via:</p>

                                    <ul>
                                        <li>
                                            {/* <ul uk-accordion='true'>
                                                <li class='uk-open'>
                                                    <a class='uk-accordion-title' href='#'>
                                                        Item 1
                                                    </a>
                                                    <div class='uk-accordion-content'>
                                                        <p>Lorem ips</p>
                                                    </div>
                                                </li>
                                            </ul> */}
                                            {/* <a href='#thiss' style={{ color: 'white' }} uk-toggle='true'> */}
                                            santosrusselljohn@gmail.com
                                            {/* </a> */}
                                        </li>
                                        <li>09054995648</li>
                                    </ul>
                                    <div className='icons'>
                                        <a
                                            href='https://www.facebook.com/russelljohn.santos.5?ref=bookmarks'
                                            className='uk-icon-link '
                                            uk-icon='facebook'
                                            target='_blank'
                                            uk-tooltip='title:Add me or Message me;pos:bottom'
                                            style={{ marginRight: 15 }}
                                        />
                                        <a
                                            href='https://twitter.com/Russsstle'
                                            target='_blank'
                                            className='uk-icon-link'
                                            uk-icon='twitter'
                                            uk-tooltip='title:Follow me on twitter;pos:bottom'
                                        />
                                    </div>

                                    <p />
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id='thiss' uk-modal='true'>
                        <div className='uk-modal-dialog uk-modal-body'>
                            <h2 className='uk-modal-title'>Headline</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className='uk-text-right'>
                                <button className='uk-button uk-button-default uk-modal-close' type='button'>
                                    Cancel
                                </button>
                                <button className='uk-button uk-button-primary' type='button'>
                                    Save
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Main
