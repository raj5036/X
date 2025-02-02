// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type AuthPayload struct {
	Token string `json:"token"`
}

type Comment struct {
	ID      string `json:"_id"`
	Content string `json:"content"`
	Author  *User  `json:"author"`
	Tweet   *Tweet `json:"tweet,omitempty"`
}

type CreateTweetInput struct {
	AuthorID string `json:"author_id"`
	Content  string `json:"content"`
}

type CreateUserInput struct {
	Name        string  `json:"name"`
	Username    string  `json:"username"`
	Password    string  `json:"password"`
	PhoneNumber *string `json:"phoneNumber,omitempty"`
	Email       *string `json:"email,omitempty"`
	Dob         string  `json:"DOB"`
}

type Like struct {
	ID      string   `json:"_id"`
	User    *User    `json:"user"`
	Tweet   *Tweet   `json:"tweet,omitempty"`
	Comment *Comment `json:"comment,omitempty"`
}

type LoginUserInput struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type Mutation struct {
}

type Query struct {
}

type Retweet struct {
	ID      string   `json:"_id"`
	User    *User    `json:"user"`
	Tweet   *Tweet   `json:"tweet,omitempty"`
	Comment *Comment `json:"comment,omitempty"`
}

type Tweet struct {
	ID       string     `json:"_id"`
	Author   *User      `json:"author,omitempty"`
	Content  string     `json:"content"`
	Likes    []*Like    `json:"likes,omitempty"`
	Comments []*Comment `json:"comments,omitempty"`
	Retweets []*Retweet `json:"retweets,omitempty"`
}

type User struct {
	ID          string     `json:"_id"`
	Name        string     `json:"name"`
	PhoneNumber *string    `json:"phoneNumber,omitempty"`
	Email       *string    `json:"email,omitempty"`
	Username    string     `json:"username"`
	Password    string     `json:"password"`
	Dob         string     `json:"DOB"`
	Tweets      []*Tweet   `json:"tweets,omitempty"`
	Likes       []*Like    `json:"likes,omitempty"`
	Comments    []*Comment `json:"comments,omitempty"`
	Retweets    []*Retweet `json:"retweets,omitempty"`
}
