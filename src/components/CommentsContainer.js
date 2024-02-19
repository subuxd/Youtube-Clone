import React from "react";

const commentsData = [
  {
    name: "Subham Singh",
    text: "Lorem ipsum dolor",
    replies: [],
  },
  {
    name: "Subham Singh",
    text: "Lorem ipsum dolor",
    replies: [
      {
        name: "Subham Singh",
        text: "Lorem ipsum dolor",
        replies: [
          {
            name: "Subham Singh",
            text: "Lorem ipsum dolor",
            replies: [
              {
                name: "Subham Singh",
                text: "Lorem ipsum dolor",
                replies: [
                  {
                    name: "Subham Singh",
                    text: "Lorem ipsum dolor",
                    replies: [
                      {
                        name: "Subham Singh",
                        text: "Lorem ipsum dolor",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Subham Singh",
    text: "Lorem ipsum dolor",
    replies: [
      {
        name: "Subham Singh",
        text: "Lorem ipsum dolor",
        replies: [
          {
            name: "Subham Singh",
            text: "Lorem ipsum dolor",
            replies: [
              {
                name: "Subham Singh",
                text: "Lorem ipsum dolor",
                replies: [
                  {
                    name: "Subham Singh",
                    text: "Lorem ipsum dolor",
                    replies: [
                      {
                        name: "Subham Singh",
                        text: "Lorem ipsum dolor",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Subham Singh",
    text: "Lorem ipsum dolor",
    replies: [],
  },
  {
    name: "Subham Singh",
    text: "Lorem ipsum dolor",
    replies: [],
  },
  {
    name: "Subham Singh",
    text: "Lorem ipsum dolor",
    replies: [],
  },
  {
    name: "Subham Singh",
    text: "Lorem ipsum dolor",
    replies: [],
  },
];

//Sending single comment
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-11 h-11"
        src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

//Sending list of comments
// below we are performing recursion of CommentsList
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
