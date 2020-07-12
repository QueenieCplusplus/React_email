// 2020, 7/12, am 10:45-11:05(duration: 20mins)
// Email Querier APP
// CSS

var React = require("react");
var EmailApp = require("./reactEmail");

var Emailer = React.createClass(

    propTypes:{

        query: React.propTypes.object.isRequired

    },

    render: function(){

        var survey = this.propTypes.query;
        var finished = survey.activity.reduce(function(memory,accumulation){ return memory + accumulation;}, 0);

        return(
            <Email responseFile = 'path/to/kkk.css'>
                <h3> {query.title} </h3>
                    <table className='for_desktop'>
                        <tr>
                            <td>
                                {/*  content */}

                            </td>
                            <td>

                                {/*  content */}

                            </td>
                        </tr>
                    </table>

                    <div className='for_mobile'>
                        {/* content */}
                    </div>
            </Email>

        );

    }

);