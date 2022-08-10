import { globalParams, globalDescribe, applicationNameDescribe, assumeYesDescribe } from './constant';
  
export const REMOVE = [
    {
        header: 'Remove',
        content: 'Remove online application resources',
    },
    {
        header: 'Document',
        content: 'https://github.com/devsapp/sae/blob/main/docs/command/remove.md',
    },
    {
        header: 'Usage',
        content: '$ s remove <options> ',
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
        content: ['$ s remove'],
    },
    {
        header: 'Examples with CLI',
        content: [
            '$ s cli sae remove --application-name appName',
        ],
    },
];
