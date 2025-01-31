"use client";

import {
	useEffect,
	useState,
	Fragment,
	type ReactElement,
	type HTMLAttributes,
} from "react";
import { TerminalIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export function CreateAppAnimation() {
	const installCmd = "npx create-ex-app my-app";
	const tickTime = 100;
	const timeCommandEnter = installCmd.length;
	const timeCommandRun = timeCommandEnter + 3;
	const timeCommandEnd = timeCommandRun + 3;
	const timeWindowOpen = timeCommandEnd + 1;
	const timeEnd = timeWindowOpen + 1;

	const [tick, setTick] = useState(timeEnd);

	useEffect(() => {
		const timer = setInterval(() => {
			setTick((prev) => (prev >= timeEnd ? prev : prev + 1));
		}, tickTime);

		return () => {
			clearInterval(timer);
		};
	}, [timeEnd]);

	const lines: ReactElement[] = [];

	lines.push(
		<span key="command_type" className="text-start">
			{installCmd.substring(0, tick)}
			{tick < timeCommandEnter && (
				<div className="inline-block h-3 w-1 animate-pulse bg-white" />
			)}
		</span>
	);

	if (tick >= timeCommandEnter) {
		lines.push(<span key="space"> </span>);
	}

	if (tick > timeCommandRun)
		lines.push(
			<div key="command_response" className="flex flex-col text-start">
				<span className="font-bold">┌ Create Express App</span>
				<span>│</span>
				{tick > timeCommandRun + 1 && (
					<>
						<span className="font-bold">◇ Project name</span>
						<span>│ my-app</span>
					</>
				)}
				{tick > timeCommandRun + 2 && (
					<>
						<span>│</span>
						<span className="font-bold">◆ Choose a Languages</span>
					</>
				)}
				{tick > timeCommandRun + 3 && (
					<>
						<span>│ ● JavaScript</span>
						<span>│ ○ TypeScript</span>
					</>
				)}
			</div>
		);

	return (
		<div
			className="relative"
			onMouseEnter={() => {
				if (tick >= timeEnd) {
					setTick(0);
				}
			}}
		>
			{tick > timeWindowOpen && (
				<LaunchAppWindow className="absolute bottom-5 right-4 z-10 animate-in fade-in slide-in-from-top-10" />
			)}
			<pre className="overflow-hidden rounded-xl border text-xs">
				<div className="flex flex-row items-center gap-2 border-b px-4 py-2">
					<TerminalIcon className="size-4" />{" "}
					<span className="font-bold">Terminal</span>
					<div className="grow" />
					<div className="size-2 rounded-full bg-green-500" />
				</div>
				<div className="min-h-[210px] bg-gradient-to-b from-fd-secondary [mask-image:linear-gradient(to_bottom,white,transparent)]">
					<code className="grid p-4">{lines}</code>
				</div>
			</pre>
		</div>
	);
}

function LaunchAppWindow(
	props: HTMLAttributes<HTMLDivElement>
): React.ReactElement {
	return (
		<div
			{...props}
			className={cn(
				"overflow-hidden rounded-md border bg-fd-background shadow-xl",
				props.className
			)}
		>
			<div className="relative flex h-6 flex-row items-center border-b bg-fd-muted px-4 text-xs text-fd-muted-foreground">
				<p className="absolute inset-x-0 text-center">localhost:4000</p>
			</div>
			<div className="p-4 text-sm">New App launched!</div>
		</div>
	);
}
