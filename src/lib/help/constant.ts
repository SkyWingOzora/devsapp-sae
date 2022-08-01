export const globalParams = {
  header: 'Global Options',
  optionList: [
    {
      name: 'help',
      description: '[Optional] Help for command',
      alias: 'h',
      type: Boolean,
    },
  ],
};

export const globalDescribe = {
  header: 'Options Help',
  content: [
    { desc: 'Required: Required parameters in YAML mode and CLI mode' },
    { desc: 'C-Required: Required parameters in CLI mode' },
    { desc: 'Y-Required: Required parameters in Yaml mode' },
    { desc: 'Optional: Non mandatory parameter' },
    { desc: '✋ The difference between Yaml mode and CLI mode: http://ej6.net/yc' },
  ],
};

export const regionDescribe = {
  name: 'region',
  description:
    '[C-Required] Specify the fc region, value: cn-hangzhou/cn-beijing/cn-beijing/cn-hangzhou/cn-shanghai/cn-qingdao/cn-zhangjiakou/cn-huhehaote/cn-shenzhen/cn-chengdu/cn-hongkong/ap-southeast-1/ap-southeast-2/ap-southeast-3/ap-southeast-5/ap-northeast-1/eu-central-1/eu-west-1/us-west-1/us-east-1/ap-south-1',
  defaultOption: false,
  type: Boolean,
};

export const applicationNameDescribe = {
  name: 'application-name',
  description: '[Required] Specify the sae application name',
  type: String,
};

export const eventFormat = {
  header: 'Event Format',
  content:
    'Quickly obtain the data structures of different events through the command [s cli fc-event -h]',
};
