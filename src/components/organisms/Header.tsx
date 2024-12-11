'use client';

import { useAuth, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ModeToggle } from '../atoms/ModeToggle';
import { Button } from '../ui/Button';

export const Header = () => {
  const { isSignedIn } = useAuth();

  return (
    <header className="mx-auto flex w-full max-w-screen-desktop items-center justify-between px-4 py-6">
      <div className="flex items-center">
        <Image src="/avatar.png" alt="avatar" width={64} height={64} className="size-16 rounded-full" />
        <a href="https://github.com/LiamPham98" target="_blank" rel="noreferrer noopener">
          <h1 className="flex items-center gap-2 text-2xl font-bold">
            I'm.Liam
          </h1>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        {isSignedIn
          ? <UserButton />
          : (
              <>
                <Link href="/sign-in">
                  Sign in
                </Link>
                <Link href="/sign-up">
                  <Button variant="default" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
      </div>
    </header>
  );
};
