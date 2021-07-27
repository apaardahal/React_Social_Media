import "./share.css";
import {PermMedia, Label,  Room, EmojiEmotions} from "@material-ui/icons";

export default function Share(){
    return (
        <div>
           <div className = "share">
               <div className = "shareWrapper">
                <div className = "shareTop">
                    <img className = "shareProfileImg" src = "/assets/person/1.jpg" alt = ""/>
                    <input type = "text" className = "shareInput" placeholder = "What's on your mind?"/>
                </div>
                <hr className = "shareHr"/>
                <div className = "shareBottom">
                    <div className = "shareOptions">
                        <div className = "shareoption">
                            <PermMedia htmlColor = "tomato" className = "shareIcon"/>
                            <span className = "shareOptionText"> Photo/Video</span>
                        </div>
                        <div className = "shareoption">
                            <Label htmlColor = "blue" className = "shareIcon"/>
                            <span className = "shareOptionText"> Tag</span>
                        </div>
                        <div className = "shareoption">
                            <Room htmlColor = "green" className = "shareIcon"/>
                            <span className = "shareOptionText"> Location</span>
                        </div>
                        <div className = "shareoption">
                            <EmojiEmotions htmlColor = "goldenrod" className = "shareIcon"/>
                            <span className = "shareOptionText"> Feelings</span>
                        </div>
                    </div>
                    <button className = "shareButton">Share</button>
                </div>
               </div>
           </div>
        </div>
    )
}