import React from 'react';
const BasicInfo = (props) => {
    return (
<fieldset className="basicInfo">
            <legend><h3>Register Merchant</h3></legend>
            <div className="formContainer">
                <input className="inputBox" type="text" value={props.merchant.formData.firstname} onChange={props.self.handleFormChange.bind(props.self, "firstname")} name="firstname" placeholder="First Name"/>
                {props.merchant.formData.firstname.length>0 && <i className="fa fa-check check" aria-hidden="true"></i>}
                {props.merchant.formData.firstname.length===0 && <i className="fa fa-times close" aria-hidden="true"></i>}
                <input className="inputBox" type="text" value={props.merchant.formData.lastname} onChange={props.self.handleFormChange.bind(props.self, "lastname")} name="lastname" placeholder="Last Name"/>	
                {props.merchant.formData.lastname.length>0 && <i className="fa fa-check check" aria-hidden="true"></i>}
                {props.merchant.formData.lastname.length===0 && <i className="fa fa-times close" aria-hidden="true"></i>}
                <input className="inputBox" type="text" value={props.merchant.formData.email} onChange={props.self.handleFormChange.bind(props.self, "email")} name="email" placeholder="Email"/>
                {props.validator.isEmail(props.self.state.formData.email) && <i className="fa fa-check check" aria-hidden="true"></i>}
                {!props.validator.isEmail(props.self.state.formData.email) && <i className="fa fa-times close" aria-hidden="true"></i>}
                <input className="inputBox" type="text" value={props.merchant.formData.phone}  onChange={props.self.handleFormChange.bind(props.self, "phone")} name="phone" placeholder="Mobile Only Numbers"/>
                <div className="divPremium"> 
                <input type="checkbox" checked={props.merchant.formData.hasPremium} value={props.merchant.formData.hasPremium} onChange={props.self.handleFormCheckChange.bind(props.self, "hasPremium")} name="hasPremium" id="hasPremium" />
                <label htmlFor="hasPremium">Is Premiuim</label>
                </div>
                </div>
                <h2>Choose Avatar for Your Profile !!!</h2>
                <div className="proj_images">
                <form>
                <fieldset id="avatarUrl">
                  <div className="images">
                  <input 
                      checked={props.merchant.formData.avatarUrl === "https://1001freedownloads.s3.amazonaws.com/vector/thumb/72002/1376606916.png"}
                      type="radio" name="avatarUrl" 
                      value="https://1001freedownloads.s3.amazonaws.com/vector/thumb/72002/1376606916.png" onChange={props.self.handleFormChange.bind(props.self, "avatarUrl")}
                      id="avt1" className="input-hidden" />
                    <label htmlFor="avt1">
                      <img className="imageAvatar"
                        src="https://1001freedownloads.s3.amazonaws.com/vector/thumb/72002/1376606916.png"  
                        alt="I'm sad" />
                    </label>
                      <input
                      checked={props.merchant.formData.avatarUrl==="https://taratechnology.ro/wp-content/uploads/avatar-6.png"}
                      type="radio" name="avatarUrl"
                      value="https://taratechnology.ro/wp-content/uploads/avatar-6.png" onChange={props.self.handleFormChange.bind(props.self, "avatarUrl")} 
                      id="avt2" className="input-hidden" />
                    <label htmlFor="avt2">
                      <img className="imageAvatar"
                        src="https://taratechnology.ro/wp-content/uploads/avatar-6.png"  
                        alt="I'm sad" />
                    </label>
                      <input
                      checked={props.merchant.formData.avatarUrl==="https://d3hdz4r8kacav0.cloudfront.net/images/training/User-Avatar-36.png"}
                      type="radio" name="avatarUrl" 
                      value="https://d3hdz4r8kacav0.cloudfront.net/images/training/User-Avatar-36.png" onChange={props.self.handleFormChange.bind(props.self, "avatarUrl")}
                      id="avt3" className="input-hidden" />
                    <label htmlFor="avt3">
                      <img className="imageAvatar"
                        src="https://d3hdz4r8kacav0.cloudfront.net/images/training/User-Avatar-36.png"  
                        alt="I'm sad" />
                    </label>
                      <input 
                      type="radio" name="avatarUrl"
                      checked={props.merchant.formData.avatarUrl==="http://www.emoticonswallpapers.com/avatar/penguins/penguin%20pingouin%20pinguino%20101.png"}
                      value= "http://www.emoticonswallpapers.com/avatar/penguins/penguin%20pingouin%20pinguino%20101.png" onChange={props.self.handleFormChange.bind(props.self, "avatarUrl")} 
                      id="avt4" className="input-hidden" />
                    <label htmlFor="avt4">
                      <img className="imageAvatar"
                        src="http://www.emoticonswallpapers.com/avatar/penguins/penguin%20pingouin%20pinguino%20101.png"  
                        alt="I'm sad" />
                    </label>
                  </div>
                  </fieldset>
                  </form>
                </div>
        </fieldset>)
  }
export default BasicInfo;