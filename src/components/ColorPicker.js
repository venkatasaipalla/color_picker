import {Component} from 'react';
import './style.css'
class ColorPicker extends Component{
    constructor(props){
        super(props);
        this.state={color:"green"};
        this.state={isDisplay:false};
    }
    render(){
        return(
            <body>
                <h1 style={{textAlign:"center",marginTop:"4%"}}>Color Picker</h1>
                <div class="card" style={{backgroundColor:this.state.color}}>
                    <div class="card-body text-center d-flex justify-content-center align-items-center flex-column">
                        <div class="d-flex c3" className={this.state.isDisplay ? 'd1' : 'd2'}>
                            <button class="c2" style={{backgroundColor:"red"}} onClick={()=>this.setState({color:"red",isDisplay:false})}></button>
                            <button class="c2" style={{backgroundColor:"green"}} onClick={()=>this.setState({color:"green",isDisplay:false})}></button>
                            <button class="c2" style={{backgroundColor:"pink"}} onClick={()=>this.setState({color:"pink",isDisplay:false})}></button>
                            <button class="c2" style={{backgroundColor:"yellow"}} onClick={()=>this.setState({color:"yellow",isDisplay:false})}></button>
                            <button class="c2" style={{backgroundColor:"white"}} onClick={()=>this.setState({color:"white",isDisplay:false})}></button>
                            <button class="c2" style={{backgroundColor:"black"}} onClick={()=>this.setState({color:"black",isDisplay:false})}></button>
                            <button class="c2" style={{backgroundColor:"blue"}} onClick={()=>this.setState({color:"blue",isDisplay:false})}></button>
                            <button class="c2" style={{backgroundColor:"purple"}} onClick={()=>this.setState({color:"purple",isDisplay:false})}></button>
                            <button class="c2" style={{backgroundColor:"orange"}} onClick={()=>this.setState({color:"orange",isDisplay:false})}></button>
                            <button class="c2" style={{backgroundColor:"tomato"}} onClick={()=>this.setState({color:"tomato",isDisplay:false})}></button>
                            <button class="c2" style={{backgroundColor:"violet"}} onClick={()=>this.setState({color:"violet",isDisplay:false})}></button>
                            <button class="c2" style={{backgroundColor:"skyblue"}} onClick={()=>this.setState({color:"skyblue",isDisplay:false})}></button>
                            <button class="c2" style={{backgroundColor:"lightgreen"}} onClick={()=>this.setState({color:"lightgreen",isDisplay:false})}></button>
                            <button class="c2" style={{backgroundColor:"darkred"}} onClick={()=>this.setState({color:"darkred",isDisplay:false})}></button>
                            <button class="c2" style={{backgroundColor:"grey"}} onClick={()=>this.setState({color:"grey",isDisplay:false})}></button>
                            <button class="c2" style={{backgroundColor:"Highlight"}} onClick={()=>this.setState({color:"Highlight",isDisplay:false})}></button>
                        </div>
                        <button class="btn btn-success btn-sm" onClick={()=>this.setState({isDisplay:!this.state.isDisplay})}>Pick a color</button>
                    </div>
                </div>
            </body>
            
        )
    }
}
export default ColorPicker;