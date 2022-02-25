const core = require('@actions/core');
const dayjs = require('dayjs');
const dayjsPluginUTC = require('dayjs/plugin/utc')
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 6)

dayjs.extend(dayjsPluginUTC)

async function main() {
	try {
		const timezone = core.getInput('timeZone')||0; // default: 0
		const formatStr = core.getInput('dateFormat')||"YY-MM-DD"  // default: 'YY-MM-DD'
    const prefixStr = core.getInput('prefix')||""
		console.log('time zone: ', timezone)
		console.log('date format: ', formatStr)

		const str = dayjs().utcOffset(timezone).format(formatStr)
    const generateStr = prefixStr +":"+ str + "-" + nanoid()
		console.log("time formatStr: ", generateStr)

		core.setOutput("imageVersion", generateStr);

	} catch (error) {
		core.setFailed(error.message);
	}
}

main();
