import React from 'react';
import { Head } from '../component/header/Head';
import { Input } from '../component/header/Input';
import { Add } from '../component/header/Add';
import { Output } from '../component/output/Output';
import '../App.css';
export class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.newItem = '';
        this.list = [];
        this.data = { newItem: '', list: [] }
        this.state = { newItemData: this.newItem, listData: this.list }
    }

    // Taking input values from input component
    takeInput(key, event) {
        this.data[key] = event.target.value;
    }       

    //Add new single item after click add button 
    createList() {
        if (this.data.newItem === '') {
            alert('Please enter tast to do...');
        }
        else {
            const newItem = {
                id: 1 + Math.random(),
                value: this.data.newItem,
                checked: false
            }
            this.data.list.push(newItem);
            document.querySelector('#txt').value = '';
            console.log(this.data.list);
            this.setState({ ...this.state, listData:this.data.list});
        }
    }

    // Delete selected single item 
    deletList(id) {
        let updatedList = this.data.list.filter(ele => {
            return ele.id !== id;
        });
        this.setState({ ...this.state, listData: updatedList });
    }

    // Saving data to local storage
    saveListToLocalStorage() {
        if (localStorage) {
            let json = JSON.stringify(this.data.list);
            localStorage.list = json;
            console.table(localStorage);
        }
        else {
            alert('Your browser is outdated......');
        }
    }

    //To do list will display when screen open automatic 
    UNSAFE_componentWillMount() {
        this.loadListFromLocalStorage();   //Can i use this machanism
    }

    //Load items from local Storage 
    loadListFromLocalStorage() {
        if (localStorage) {
            if (localStorage.list) {
                this.data.list = [];
                let listArry = JSON.parse(localStorage.list);
                for (let ele of listArry) {
                    this.data.list.push(ele);
                }
                this.setState({...this.state })
            }
            else {
                alert('Nothing to load');
            }
        }
        else {
            alert('Your browser is outdated.....');
        }
    }

    //Toggle item (for done or left last) 
    toggleList(event, listObj) {
        var id = listObj.id;
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('checked');
        }
        for (let ele of this.data.list) {
            for (let obj in ele) {
                if (ele[obj] === id) {
                    ele['checked'] = !ele['checked'];
                }
            }
        }
    }
    render() {
        return (<>
            <div className='header form-group'>
                <center>
                    <Head />
                    <Input takeInput={this.takeInput.bind(this)} />
                    <Add createList={this.createList.bind(this)} save={this.saveListToLocalStorage.bind(this)} load={this.loadListFromLocalStorage.bind(this)} />
                </center>
            </div>
            <div>
                <Output list={this.data.list} deletItem={this.deletList.bind(this)} toggle={this.toggleList.bind(this)} />
            </div>
        </>
        )
    }
}