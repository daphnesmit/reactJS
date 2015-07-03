var React = require('react');

var UserProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },
    render: function(){
        return (
            <div>
                USER PROFILE <br/>
                Username: {this.props.username} <br/>
                BIO: {this.props.bio}
            </div>
        )
    }
});

module.exports = UserProfile;