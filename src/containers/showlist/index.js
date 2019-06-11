import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import './style.css';
class showList extends React.Component{

    componentDidMount(){
        this.props.getList();
    }


    deleteList = (index) => {
        this.props.deleteList(index);
    }

    addToList = (index) => {
        this.props.addToList(index);
    }

    render() {
        return <div className='App'>
            <h2>MyList</h2>
            <div className="List">
                {this.props.mylist.map((list, index) =>{
                    return <li className='Hover' key={list.id}>
                        <div>
                            <h3>{list.title}</h3>
                            <img src={list.img} alt={list.id}></img>
                            <button className='buttonlist' onClick={this.deleteList.bind(this, index)}>delete</button>
                        </div>
                        
                    </li>;
                })}
            </div>


            <h2>Recommendations</h2>
            <div className='List'>
                {this.props.recommendations.map((recommendation, index) =>{
                    return <li className='Hover' key={recommendation.id}>
                        <div>
                            <h3>{recommendation.title}</h3>
                            <img src={recommendation.img} alt={recommendation.id}></img>
                            <button className="buttonRec" onClick={this.addToList.bind(this, index)}>Add</button>
                        </div>
                        
                    </li>;
                })}
            </div>

            <h2>Deleted List</h2>
            <div className="List">
                {this.props.deleted.map((de, index) =>{
                    return <li className='Hover' key={de.id}>
                        <div>
                            <h3>{de.title}</h3>
                            <img src={de.img} alt={de.id}></img>
                            <button className='buttonDel' onClick={this.props.addFromDelete.bind(this, index)}>Add</button>
                        </div>
                        
                        
                    </li>;
                })}
            </div>
            
        </div>
    }
}
const mapStatetoProps = state => {
    return {
        mylist : state.lists.mylist
        ,recommendations: state.lists.recommendations
        ,deleted: state.lists.deleted
        ,
        
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getList: () => {
            dispatch(actions.getList());
        },
        deleteList: (index) => {
            dispatch(actions.deleteList(index));
        },
        addToList: (index) => {
            dispatch(actions.addToList(index));
        },
        addFromDelete: (index) => {
            dispatch(actions.addFromDelete(index));
        }

    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(showList);
