const React = require('react');

class AppLayout extends React.Component{
  render() {
    return (
      <html lang="en" dir="ltr">
        <head>
            <meta charSet="utf-8"/>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="/css/custom-bootstrap.css" />
        <link rel="stylesheet" href="/css/style.css" />

            <title>{this.props.title}</title>
        </head>
        <body>
          <div className="container-fluid">
          {this.props.children}
          </div>
        </body>
    </html>
    )
  }
}
module.exports= AppLayout;