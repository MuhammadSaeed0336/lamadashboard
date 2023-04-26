import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import './user.css'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to='/newUser'>
            <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://images.pexels.com/photos/1549974/pexels-photo-1549974.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Saeed</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <sapn className="userShowTitle">Account Details</sapn>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon' />
                        <span className="userShowInfoTitle">saeed999</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon' />
                        <span className="userShowInfoTitle">15-03-1999</span>
                    </div>
                    <sapn className="userShowTitle">Contact Details</sapn>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon' />
                        <span className="userShowInfoTitle">+92 333 111 22</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon' />
                        <span className="userShowInfoTitle">abc@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className='userShowIcon' />
                        <span className="userShowInfoTitle">Kohat | Pakistan</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder='Saeed' className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder='M Saeed' className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder='abc@gmail.com' className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder='+92 333 111 22' className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder='Kohat | Pakistan' className="userUpdateInput" />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://images.pexels.com/photos/1549974/pexels-photo-1549974.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="userUpdateImg" />
                            <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                            <input type="text" id='file' style={{display: "none"}} />
                        </div>
                        <button className="userUpdateButton">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User