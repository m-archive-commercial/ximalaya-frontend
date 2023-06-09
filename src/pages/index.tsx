import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { IconPlayerPlayFilled } from '@tabler/icons-react'
import { ximalayaListData } from '@/config'


export interface XimalayaItem {
	id: number
	trackInfo: {
		albumId: number
		/**
		 * 这个没用，都是空，不知道喜马拉雅搞什么幺蛾子
		 */
		albumTitle: string
		cover: string
		playPath: string
		title: string
		updatedTime: number
	}
}

export default function Home(
	{
		// data: ximalayaListData,
	}: {
		// data: XimalayaItem[]
	}) {
	
	console.log({ ximalayaListData })
	
	return (
		<>
			<Head>
				<title>喜马拉雅下载</title>
				<meta name="description" content="Generated by create next app"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			
			<main className={'w-screen h-screen flex justify-center items-center'}>
				<div className="overflow-auto w-full h-full">
					<table className="table table-compact w-full h-full">
						{/* head */}
						<thead>
						<tr>
							<th></th>
							<th>id</th>
							<th>cover</th>
							<th>title</th>
							<th>play</th>
							<th>album id</th>
						
						</tr>
						</thead>
						<tbody>
						
						{
							ximalayaListData.map((item, index) => {
								const cover = `https://imagev2.xmcdn.com/${item.trackInfo.cover}`
								return (
									<tr key={index}>
										<th>{index + 1}</th>
										<td>{item.id}</td>
										{/* sample cover: https://imagev2.xmcdn.com/storages/8c34-audiofreeh…e.jpeg!op_type=3&columns=290&rows=290&magick=webp */}
										<td><Image src={cover} alt={cover} width={64} height={64}/></td>
										<td>{item.trackInfo.title}</td>
										<td><Link href={item.trackInfo.playPath} target={'_blank'}>
											<IconPlayerPlayFilled className={'text-green-700'}/>
										</Link></td>
										<td>{item.trackInfo.albumId}</td>
									</tr>
								)
							})
						}
						
						</tbody>
					</table>
				</div>
			</main>
		</>
	)
}


export const getServerSideProps: GetServerSideProps = async () => {
	// const res = await backendAPI.get('/ximalaya/list')
	return {
		props: {
			// data: res.data,
		},
	}
}
