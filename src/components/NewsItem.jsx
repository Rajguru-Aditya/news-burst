import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            style={{ zIndex: "1", left: "50%" }}
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          >
            {source}
          </span>
          <img
            src={imgUrl}
            style={{ height: "250px", objectFit: "cover" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author}
                <br />
                on {new Date(date).toLocaleString()}
              </small>
            </p>
            <a
              href={newsUrl}
              className="btn btn-sm btn-dark"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
