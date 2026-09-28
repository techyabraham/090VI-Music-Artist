'use client';
import {useSyncExternalStore} from 'react';
import {getMotion,getMotionSource,getServerMotion,subscribeMotion} from '../lib/motion';
export function useMotion(){const mode=useSyncExternalStore(subscribeMotion,getMotion,getServerMotion);return {mode,source:getMotionSource()}}
