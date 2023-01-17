import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchResources } from "../../actions/resource/index";
import ResourceTable from "../Table/ResourceTable";
import 'bootstrap/dist/css/bootstrap.css';

class HomePage extends React.Component{
    constructor() {
        super();
        this.state = {
            resources: [],
            LOADING: false,
            message: '',
        }
    }

    componentDidMount(){
        this.props.fetchResources();
    }
    
    render() {
        
        return (
            <div className="container-fluid">
                <div className="row justify-content-center m-5">
                    <div className="col-md-6">
                        <ResourceTable resources={this.props.resources} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        resources: state.resources.data,
        LOADING: state.resources.LOADING,
        message: state.resources.message,
    };
};

export default connect(mapStateToProps, {
    fetchResources,
})(withRouter(HomePage));