import React, { Component } from 'react';

export default class UserShippingaddress extends Component {
    render() {
        return (
            <form className='address-form'>
                <fieldset className='fieldset'>
                    <div className='row'>
                        <div className='col-des-6 col-tb-6 col-mb-12 field-name-firstname'>
                            <label className='label'><span>First Name</span></label>
                            <div className='control'>
                                <input type='text' id='firstname' className='input-text'></input>
                            </div>
                        </div>
                        <div className='col-des-6 col-tb-6 col-mb-12 field-name-lastname'>
                            <label className='label'><span>Last Name</span></label>
                            <div className='control'>
                                <input type='text' id='lasttname' className='input-text'></input>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-des-6 col-tb-6 col-mb-12'>
                            <label className='label'><span>Telephone</span></label>
                            <div className='control'>
                                <input type='text' id='telephone' className='input-text'></input>
                            </div>
                        </div>
                        <div className='col-des-6 col-tb-6 col-mb-12'>
                            <label className='label'><span>Address</span></label>
                            <div className='control'>
                                <input type='text' id='street' className='input-text'></input>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-des-6 col-tb-6 col-mb-12'>
                            <label className='label'><span>city</span></label>
                            <div className='control'>
                                <input type='text' id='city' className='input-text'></input>
                            </div>
                        </div>
                        <div className='col-des-6 col-tb-6 col-mb-12'>
                            <label className='label'><span>Country</span></label>
                            <div className='control'>
                                <select id='country'>
                                    <option>Please select country</option>
                                    <option>Australia</option>
                                    <option>Indonesia</option>
                                    <option>India</option>
                                    <option>Spain</option>
                                    <option>Ukraine</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-des-6 col-tb-6 col-mb-12'>
                            <label className='label'><span>State</span></label>
                            <div className='control'>
                                <input type='text' id='state' className='input-text'></input>
                            </div>
                        </div>
                        <div className='col-des-6 col-tb-6 col-mb-12'>
                            <label className='label'><span>Pincode</span></label>
                            <div className='control'>
                                <input type='text' id='pincode' className='input-text'></input>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className='actions-toolbar'>
                    <div className='primary'>
                        <button type="submit" class="btn btn-default"><span>Save</span></button>
                    </div>
                </div>
            </form>
        );
    }
}
