import { ConnectButton } from "thirdweb/react";
import thirdwebIcon from "./thirdweb.jpg";
import { client } from "./client";

export function App() {
	return (
		<main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
			<div className="py-20">
				<Header />

				<div className="flex justify-center mb-20">
					<ConnectButton 
						client={client}
						appMetadata={{
							name: "Example app",
							url: "https://example.com",
						}}
					/>
				</div>

				<ThirdwebResources />
			</div>
		</main>
	);
}

function Header() {
	return (
		<header className="flex flex-col items-center mb-20 md:mb-20">
			<img
				src={thirdwebIcon}
				alt=""
				// className="size-[250px] md:size-[250px]"
				style={{
					filter: "drop-shadow(0px 0px 24px #a726a9a8)", width: "400px", height: "250px"
				}}
			/>
			<br />
			<br />

			<h3 className="text-2xl md:text-4xl font-bold tracking-tighter mb-6 text-zinc-100">
				<span className="inline-block -skew-x-6 text-violet-500"> Enjoy  wallet connect. </span>
			</h3>

			
		</header>
	);
}

function ThirdwebResources() {
	return (
		<div className="grid gap-4 lg:grid-cols-3 justify-center">
			<ArticleCard
				title="cripto wallet"
				href="https://www.coinbase.com/learn/crypto-basics/what-is-a-crypto-wallet"
				description="Crypto wallets are designed to store your private key, keeping your crypto accessible at all times. They also allow you to send, receive, and spend cryptocurrencies like Bitcoin and Ethereum."
			/>

			<ArticleCard
				title="Blockchain Wallet"
				href="https://www.geeksforgeeks.org/what-is-blockchain-wallet/"
				description="A blockchain wallet is a software that enables sending and receiving cryptocurrencies such as Bitcoin, Ethereum, etc. It stores the record of transactions and also public and private keys which are used to perform transactions. "
			/>

			<ArticleCard
				title="Wallet Account Agreement"
				href="https://www.nium.com/legal/column-wallet-account-agreement"
				description="IMPORTANT - PLEASE READ CAREFULLY. THIS AGREEMENT CONTAINS AN ARBITRATION PROVISION REQUIRING ALL CLAIMS TO BE RESOLVED BY WAY OF BINDING ARBITRATION."
			/>
		</div>
	);
}

function ArticleCard(props: {
	title: string;
	href: string;
	description: string;
}) {
	return (
		<a
			href={`${props.href}?utm_source=vite-template`}
			target="_blank"
			className="flex flex-col border border-zinc-1000 p-1 rounded-5g hover:bg-zinc-900 transition-colors hover:border-zinc-700"
			rel="noreferrer"
		>
			<article>
				<h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-6 text-zinc-100">{props.title}</h2>
				<p className="text-1xl md:text-1xl font-bold tracking-tighter mb-6 text-zinc-100">{props.description}</p>
			</article>
		</a>
	);
}
