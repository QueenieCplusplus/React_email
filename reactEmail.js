// 2020, 7/12, am 10:30-10:45
// Email
// CSS

var fs = require("fs");
var React = require("react");
var EmailApp = React.createClass(

    setInitailState: function(){
        return(
            {res: React.states.string}
        );
    },

    render: function(){

        var responseFile = this.state.res;
        var styles;

        if(responseFile){

            // read path | url into Buffer
            styles = <style>{fs.readFileSync(responseFile)}</style>;
        }

        return(

            <html>

                <body>

                    {styles}
                    {this.state.children}

                </body>

            </html>

        );

    }


);
