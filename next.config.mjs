import { withPayload } from "@payloadcms/next/withPayload";
/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
	webpack: (config) => {
		config.resolve = config.resolve || {};
		config.resolve.alias = {
			...(config.resolve.alias || {}),
			'@payload-config': path.resolve(process.cwd(), 'payload.config.ts'),
			'@': path.resolve(process.cwd(), '.'),
		};
		return config;
	},
};

export default withPayload(nextConfig);
