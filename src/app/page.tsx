'use client'
import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';
import { getPresidents } from './data/actions';
import { useRouter } from 'next/navigation';

export default function Page(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  
  const createAccount = async () => {
    // alert(firstName + ',' + lastName + ',' + email + ',' + password + ',' + confirmPassword);
    const presidents = await getPresidents();
    console.log('createAccount====>', presidents);
    router.push('/dashboard');
  }

  return (
    <div className={styles.rootContainer}>
      <div className={styles.leftContainer}>
        <Image className={styles.sampleImage} src="/app_main_image.png" alt="Profile" fill={true} />
      </div>
      <div className={styles.rightContainer}>
        <button className={styles.signup}>Sign Up</button>
        <div
          className={styles.createAccount}>
          Create An Account
        </div>
        <div className={styles.userNameContainer}>
          <input
            className={styles.name}
            placeholder='First Name'
            type='text'
            value={firstName}
            onChange={(e) => {
              setFirstName(e?.target.value);
            }}
          />
          <input
            className={`${styles.name} ${styles.lastName}`}
            placeholder='Last Name'
            type='text'
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value)
            }}
          />
        </div>
        <input
        required={true}
          className={`${styles.email}`}
          placeholder='Enter Your Email'
          type='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <input 
          className={`${styles.email}`} 
          placeholder='Password' 
          type='password' 
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <input 
          className={`${styles.email}`} 
          placeholder='Confirm Password' 
          type='password' 
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value)
          }}
        />
        <button 
          className={styles.createAccountButton}
          onClick={createAccount}
        >
          Create an Account
        </button>
      </div>
    </div>
  )
}