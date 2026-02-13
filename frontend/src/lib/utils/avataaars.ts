
const customAvatars: Record<string, Record<string, string>> = {
	'Ondřej Sýkora': {
		avatarStyle: 'Circle',
		topType: 'ShortHairShortFlat',
		accessoriesType: 'Blank',
		hairColor: 'Brown',
		facialHairType: 'BeardMedium',
		facialHairColor: 'Brown',
		clotheType: 'ShirtCrewNeck',
		clotheColor: 'Blue03',
		eyeType: 'Happy',
		eyebrowType: 'DefaultNatural',
		mouthType: 'Smile',
		skinColor: 'Light'
	},
	'Roman Hvizdak': {
		avatarStyle: 'Circle',
		topType: 'NoHair',
		accessoriesType:'Prescription02',
		hairColor: 'none',
		facialHairType: 'none',
		clotheType: 'ShirtCrewNeck',
		clotheColor: 'Gray02',
		eyeType: 'Happy',
		eyebrowType: 'DefaultNatural',
		mouthType: 'Smile',
		skinColor: 'Light'
	},
	'Jan Breitkopf': {
		avatarStyle: 'Circle',
		topType: 'ShortHairShortWaved',
		accessoriesType: 'Blank',
		hairColor: 'Brown',
		facialHairType: 'Blank',
		clotheType: 'ShirtCrewNeck',
		clotheColor: 'Blue02',
		eyeType: 'Happy',
		eyebrowType: 'Default',
		mouthType: 'Smile',
		skinColor: 'Light'
	},
	'Jakub Kleberc': {
		avatarStyle: 'Circle',
		topType: 'ShortHairShortFlat',
		accessoriesType: 'Prescription02',
		hairColor: 'Black',
		facialHairType: 'BeardMedium',
		facialHairColor: 'Black',
		clotheType: 'ShirtCrewNeck',
		clotheColor: 'White',
		eyeType: 'Default',
		eyebrowType: 'DefaultNatural',
		mouthType: 'Smile',
		skinColor: 'Light'
	},
	'Lukáš Stuchlík': {
		avatarStyle: 'Circle',
		topType: 'ShortHairShortWaved',
		accessoriesType: 'Blank',
		hairColor: 'Brown',
		facialHairType: 'Blank',
		clotheType: 'ShirtCrewNeck',
		clotheColor: 'Gray02',
		eyeType: 'Happy',
		eyebrowType: 'DefaultNatural',
		mouthType: 'Smile',
		skinColor: 'Light'
	},
	'Patrik Ludvik': {
		avatarStyle: 'Circle',
		topType: 'ShortHairShortFlat',
		accessoriesType: 'Prescription01',
		hairColor: 'Blonde',
		facialHairType: 'Blank',
		clotheType: 'Hoodie',
		clotheColor: 'Black',
		eyeType: 'Happy',
		eyebrowType: 'Default',
		mouthType: 'Smile',
		skinColor: 'Light'
	},
	'Vojtěch Jíra': {
		avatarStyle: 'Circle',
		topType: 'ShortHairShortFlat',
		accessoriesType: 'Prescription02',
		hairColor: 'BrownDark',
		facialHairType: 'BeardMedium',
		facialHairColor: 'BrownDark',
		clotheType: 'ShirtCrewNeck',
		clotheColor: 'Black',
		eyeType: 'Happy',
		eyebrowType: 'DefaultNatural',
		mouthType: 'Smile',
		skinColor: 'Light'
	}
};

export function generateAvataaarsUrl(name: string): string {
	const config = customAvatars[name];
	if (!config) {
		console.warn(`No custom avatar found for: ${name}`);
		return '';
	}

	const params = new URLSearchParams(config);
	return `https://avataaars.io/?${params.toString()}`;
}
