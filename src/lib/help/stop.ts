import { globalParams, globalDescribe, applicationNameDescribe, assumeYesDescribe } from './constant';
  
export const STOP = [
    {
        header: 'Stop',
        content: 'Stop online application resources',
    },
    {
        header: 'Document',
        content: 'https://github.com/devsapp/sae/blob/main/docs/command/stop.md',
    },
    {
        header: 'Usage',
        content: '$ s stop <options> ',
    },
    {
        header: 'Options',
        optionList: [
            applicationNameDescribe,assumeYesDescribe
        ],
    },
    { ...globalParams },
    { ...globalDescribe },
    {
        header: 'Examples with Yaml',
        content: ['$ s stop'],
    },
    {
        header: 'Examples with CLI',
        content: [
            '$ s cli sae stop --application-name appName',
        ],
    },
];