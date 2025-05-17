"use client";

import CommonHomePage from '@/components/home/CommonHomePage';
import UsersHomePage from '@/components/home/UsersHomePage';
import React from 'react';
const isUser = false;
export default function HomePage() {
  

  return isUser ? <UsersHomePage/> : <CommonHomePage/>;
}