import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello this is a constructor from News Component");
    this.state = {
      articles: [],
      loaded: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=c4be082d1c634629a137879e75602006&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  handlePrev = async () => {
    console.log("Previous");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c4be082d1c634629a137879e75602006&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNext = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c4be082d1c634629a137879e75602006&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  defaultImage =
    "https://images.unsplash.com/photo-1534269222346-5a896154c41d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  render() {
    return (
      <div className="container my-3">
        <h2>NewsBurst - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?.substring(0, 30) + "..."}
                  description={element.description?.substring(0, 100) + "..."}
                  imgUrl={
                    element.urlToImage ? element.urlToImage : this.defaultImage
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            onClick={this.handlePrev}
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            onClick={this.handleNext}
            type="button"
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
