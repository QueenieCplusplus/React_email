# React_email

# Send Email

    / render_email.js

    var React = require('react');
    var Emailer = require('/reactEmailer.js');
    var s = {};

    console.log(
        React.renderToStaticMarkup(<Emailer survey = {s} />)
    )

# for Mobile

可以根據螢幕尺寸選擇不同樣式表以進行顯示或是隱藏。

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
        
 
