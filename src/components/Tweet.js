import React from 'react'
import "./Tweet.css"

export default function Tweet(props) {
  return (
    <div>
        <div className="container">
            <div className="pfphandle">
                <img className="pfp" src={"./img/"+props.user+".jpg"}></img>
                <div className="namehandle">
                    <h1 className="name">{props.name}</h1>
                    <h1 className="handle">{props.user}</h1>
                </div>
            </div>
            <div className="text">
                <h1 className="textcontent">{props.text}</h1>
            </div>
            <div className="metadata">
                <h1 className="meta">{props.hour}</h1>
                <h1 className="metaseparator">·</h1>
                <h1 className="meta">{props.date}</h1>
                <h1 className="metaseparator">·</h1>
                <h1 className="meta">Twitter Web App</h1>
            </div>
            <div className="impressions">
                <h1 className="impression"><span>{props.retweets}</span> Retweets</h1>
                <h1 className="impression"><span>{props.quoted}</span> Tweets citados</h1>
                <h1 className="impression"><span>{props.likes}</span> Me gusta</h1>
            </div>
            <div className="interact">
                <div className="interaction">
                    <svg className="comment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/*!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}<path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z"/></svg>
                </div>
                <div className="interaction">
                    <svg className="retweet" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">{/*!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}<path d="M614.2 334.8C610.5 325.8 601.7 319.1 592 319.1H544V176C544 131.9 508.1 96 464 96h-128c-17.67 0-32 14.31-32 32s14.33 32 32 32h128C472.8 160 480 167.2 480 176v143.1h-48c-9.703 0-18.45 5.844-22.17 14.82s-1.656 19.29 5.203 26.16l80 80.02C499.7 445.7 505.9 448 512 448s12.28-2.344 16.97-7.031l80-80.02C615.8 354.1 617.9 343.8 614.2 334.8zM304 352h-128C167.2 352 160 344.8 160 336V192h48c9.703 0 18.45-5.844 22.17-14.82s1.656-19.29-5.203-26.16l-80-80.02C140.3 66.34 134.1 64 128 64S115.7 66.34 111 71.03l-80 80.02C24.17 157.9 22.11 168.2 25.83 177.2S38.3 192 48 192H96V336C96 380.1 131.9 416 176 416h128c17.67 0 32-14.31 32-32S321.7 352 304 352z"/></svg>
                </div>
                <div className="interaction">
                    <svg className="like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/*<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}<path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>
                </div>
                <div className="interaction">
                    <svg className="share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/*<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}<path d="M384 352v64c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-64c0-17.67-14.33-32-32-32s-32 14.33-32 32v64c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-64c0-17.67-14.33-32-32-32S384 334.3 384 352zM201.4 9.375l-128 128c-12.51 12.51-12.49 32.76 0 45.25c12.5 12.5 32.75 12.5 45.25 0L192 109.3V320c0 17.69 14.31 32 32 32s32-14.31 32-32V109.3l73.38 73.38c12.5 12.5 32.75 12.5 45.25 0s12.5-32.75 0-45.25l-128-128C234.1-3.125 213.9-3.125 201.4 9.375z"/></svg>
                </div>
            </div>
        </div>
    </div>
  )
}
