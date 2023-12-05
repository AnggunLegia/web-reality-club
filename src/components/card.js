'use client';

import { Card } from 'flowbite-react';

export default function DefaultCard({judul, desk, pindah}) {
  return (
    <Card
      className="max-w-sm hover:bg-slate-300"
      href={pindah}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {judul}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       {desk}
      </p>
    </Card>
  )
}


