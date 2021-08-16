import "./post.css";
import { MoreVert } from "@material-ui/icons";

export default function Post() {
    return (
        <div className = "post">
            <div className = "postWrapper">
                <div className = "postTop">
                    <div className = "postTopLeft ">
                        <img  className = "postProfileImg" src= "/assets/person/1.jpg" alt = ""/>
                        <span className = "postUsername">Apaar Dahal</span>
                        <span className = "postDate">5 mins ago</span>
                    </div>
                    <div className = "postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className = "postCenter">
                    <span className = "postText"> Hello, I'm learning react</span>
                    <img className = "postImg" src = "assets/post/post1.jpg" />
                </div>
                <div className = "postBottom">
                    <div className = "postBottomLeft">
                        <img className = "likeIcon" src = "assets/likes/heart.jpg" />
                        <img className = "likeIcon" src = "assets/likes/like.png"/>
                        <span className = "postLikeCounter">200 people liked it</span>
                    </div>
                    <div className = "postBottomRight">
                        <span className = "postCommentText">15 people commented</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

