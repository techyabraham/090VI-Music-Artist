'use client';
import {Component,type ErrorInfo,type ReactNode} from 'react';
type Props={children:ReactNode;label:string};type State={failed:boolean};
export class ErrorBoundary extends Component<Props,State>{state:State={failed:false};static getDerivedStateFromError(){return{failed:true}}componentDidCatch(error:Error,info:ErrorInfo){if(process.env.NODE_ENV==='development')console.error(`090VI ${this.props.label} failed`,error,info.componentStack)}render(){if(this.state.failed)return <div className="component-fallback" role="status">{this.props.label} is unavailable right now.</div>;return this.props.children}}
