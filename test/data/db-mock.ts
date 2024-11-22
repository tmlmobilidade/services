import { Agency, Alert, createOperationalDate, Email, Municipality, Organization, Permission, Role, Stop, User, Zone } from '@/types';
import { ObjectId, WithId } from 'mongodb';

export const mockPermissions: Permission<unknown>[] = [
	// Write
	{ action: 'write', scope: 'stop' } as Permission<Stop>,
	{ action: 'write', scope: 'user' } as Permission<User>,
	// Read
	{ action: 'read', scope: 'user' } as Permission<User>,
	{ action: 'read', scope: 'stop' } as Permission<Stop>,
	// With resource
	{ action: 'read', resource: { code: ['111'] }, scope: 'stop' } as Permission<Stop>,
	{ action: 'read', resource: { code: ['222'] }, scope: 'stop' } as Permission<Stop>,
	{ action: 'write', resource: { code: ['111'] }, scope: 'stop' } as Permission<Stop>,

];

export const mockRoles: WithId<Role>[] = [
	{ _id: new ObjectId('672e31fdfe34edeb0e94f595'), name: 'writer', permissions: mockPermissions.slice(0, 1) },
	{ _id: new ObjectId('672e32054a4dc901df83dfdc'), name: 'reader', permissions: mockPermissions.slice(3, 4) },
];

export const mockUsers: WithId<User>[] = [
	{
		_id: new ObjectId('672e3c37ae64cf8f5992ecb7'),
		created_at: new Date(),
		email: 'writer@example.com' as Email,
		first_name: 'Writer',
		last_name: 'User',
		organization_ids: [
			new ObjectId('672e3d807d2772b2a1a4bcbc'),
		],
		password_hash: 'hashedPassword',
		permissions: [],
		phone: '1234567890',
		role_ids: [new ObjectId('672e31fdfe34edeb0e94f595')],
		session_ids: [],
		updated_at: new Date(),
		verification_token_ids: [],
	},
	{
		_id: new ObjectId('672e3c7efa72c301e0cca74b'),
		avatar: '',
		bio: '',
		created_at: new Date(),
		email: 'reader@example.com' as Email,
		first_name: 'Reader',
		last_name: 'User',
		organization_ids: [

			new ObjectId('672e3d807d2772b2a1a4bcbc'),
			new ObjectId('672e3d7c75a11f15ba723c2f'),
		],
		password_hash: 'hashedPassword',
		permissions: [
			mockPermissions[4],
		],
		phone: '0987654321',
		role_ids: [new ObjectId('672e32054a4dc901df83dfdc')],
		session_ids: [],
		updated_at: new Date(),
		verification_token_ids: [],
	},
	{
		_id: new ObjectId('672e3c7efa72c301e0cca74c'),
		avatar: '',
		bio: '',
		created_at: new Date(),
		email: 'permission@example.com' as Email,
		first_name: 'Permission',
		last_name: 'User',
		organization_ids: [

			new ObjectId('672e3d807d2772b2a1a4bcbc'),
			new ObjectId('672e3d7c75a11f15ba723c2f'),
		],
		password_hash: 'hashedPassword',
		permissions: [
			mockPermissions[1],
		],
		phone: '1234567890',
		role_ids: [],
		session_ids: [],
		updated_at: new Date(),
		verification_token_ids: [],
	},

];

export const mockZones: WithId<Zone>[] = [
	{
		_id: new ObjectId('64910c954e33225dd2f15871'),
		border_color: '#cf7508',
		border_opacity: 0.5,
		border_width: 3,
		code: '1507',
		created_at: new Date('2024-03-13T11:39:35.185Z'),
		fill_color: '#cf7508',
		fill_opacity: 0.2,
		geojson: {
			geometry: {
				coordinates: [
					[
						[
							[
								-8.965806944622736,
								38.72688987365539,
							],
							[
								-8.96621857862725,
								38.72767872130188,
							],
						],
					],
					[
						[
							[
								-8.68484270610704,
								38.82667216470655,
							],
							[
								-8.68502407329156,
								38.82668395423508,
							],
						],
					],
				],
				type: 'MultiPolygon',
			},
			properties: {},
			type: 'Feature',
		},
		is_locked: false,
		name: 'Montijo',
		updated_at: new Date('2024-03-13T11:39:35.185Z'),
	},
	{
		_id: new ObjectId('64996d1bf45d37f8e1c5dcea'),
		border_color: '#1ef916',
		border_opacity: 0.5,
		border_width: 3,
		code: '1502',
		created_at: new Date('2024-03-13T11:39:35.185Z'),
		fill_color: '#1fff17',
		fill_opacity: 0.2,
		geojson: {
			geometry: {
				coordinates: [
					[
						[
							[
								-8.965806944622736,
								38.72688987365539,
							],
							[
								-8.96621857862725,
								38.72767872130188,
							],
						],
					],
					[
						[
							[
								-8.68484270610704,
								38.82667216470655,
							],
							[
								-8.68502407329156,
								38.82668395423508,
							],
						],
					],
				],
				type: 'MultiPolygon',
			},
			properties: {},
			type: 'Feature',
		},
		is_locked: false,
		name: 'Montijo',
		updated_at: new Date('2024-03-13T11:39:35.185Z'),
	},
];

export const mockStops: WithId<Stop>[] = [
	{
		_id: new ObjectId('6476b095424adb51586dffa7'),
		code: '010015',
		created_at: new Date('2024-03-21T01:15:32.928Z'),
		latitude: 38.7487576,
		locality: 'Alcochete',
		longitude: -8.9671055,
		municipality: new ObjectId('649b4cce0ac399a0115319e3'),
		municipality_code: '1115',
		name: 'ALCOCHETE (R LIBERDADE) ESCOLA VALBOM',
		operational_status: 'ACTIVE',
		short_name: 'Escola Básica n.º 2 de Alcochete (Valbom)',
		tts_name: 'Alcochete ( Rua Liberdade ) Escola Valbom',
		updated_at: new Date('2024-06-05T12:07:35.985Z'),
		zones: [
			new ObjectId('64910c954e33225dd2f15871'),
			new ObjectId('64996d1bf45d37f8e1c5dcea'),
		],
	},
	{
		_id: new ObjectId('6476b094424adb51586dfcee'),
		code: '010001',
		created_at: new Date('2024-09-16T14:38:12.398Z'),
		latitude: 38.7542436,
		locality: 'Alcochete',
		longitude: -8.9595566,
		municipality: new ObjectId('6450539f8f71c3c98f1fbed0'),
		municipality_code: '1504',
		name: 'Rua Carlos Manuel Rodrigues Francisco (Escola)',
		operational_status: 'ACTIVE',
		short_name: 'R. Carlos Manuel Rodrigues Francisco (Escola)',
		tts_name: 'Rua Carlos Manuel Rodrigues Francisco ( Escola )',
		updated_at: new Date('2024-09-16T14:38:14.068Z'),
		zones: [
			new ObjectId('64910c954e33225dd2f15871'),
		],
	},
];

export const mockOrganizations: WithId<Organization>[] = [
	{
		_id: new ObjectId('672e3d807d2772b2a1a4bcbc'),
		code: '1',
		name: 'Organization 1',
	},
	{
		_id: new ObjectId('672e3d7c75a11f15ba723c2f'),
		code: '2',
		name: 'Organization 2',
	},
];

export const mockMunicipalities: WithId<Municipality>[] = [
	{
		_id: new ObjectId('649b4cce0ac399a0115319e3'),
		border_color: '#ffffff',
		border_opacity: 0.5,
		border_width: 3,
		code: '1115',
		created_at: new Date('2023-06-27T20:55:42.767Z'),
		district: '11',
		fill_color: '#611919',
		fill_opacity: 0.5,
		geojson: {
			geometry: {
				coordinates: [
					[
						[
							-9.23542624099997,
							38.79627920200005,
						],
						[
							-9.235565959999974,
							38.79641254500007,
						],

					],
				],
				type: 'Polygon',
			},
			properties: {},
			type: 'Feature',
		},
		is_locked: false,
		name: 'Amadora',
		prefix: '03',
		region: 'PT170',
		updated_at: new Date('2024-01-04T11:36:17.489Z'),
	},
	{
		_id: new ObjectId('6450539f8f71c3c98f1fbed0'),
		border_color: '#ffffff',
		border_opacity: 0.5,
		border_width: 3,
		code: '1504',
		created_at: new Date('2023-06-27T20:57:44.315Z'),
		district: '15',
		fill_color: '#ad6666',
		fill_opacity: 0.5,
		geojson: {
			geometry: {
				coordinates: [
					[
						[
							-9.036244457999942,
							38.68370353600005,
						],
						[
							-9.03532428099993,
							38.68390666000005,
						],
					],
				],
				type: 'Polygon',
			},
			properties: {},
			type: 'Feature',
		},
		is_locked: false,
		name: 'Barreiro',
		prefix: '04',
		region: 'PT170',
		updated_at: new Date('2024-01-04T11:36:36.879Z'),
	},
];

export const mockAgencies: WithId<Agency>[] = [
	{
		_id: new ObjectId('67378cebad93f9b2668ec93c'),
		code: '1',
		created_at: new Date(),
		email: 'agency1@example.com',
		fare_url: '',
		is_locked: false,
		lang: 'pt',
		name: 'Agency 1',
		operation_start_date: createOperationalDate('20240101'),
		phone: '1234567890',
		price_per_km: 0,
		timezone: 'Europe/Lisbon',
		total_vkm_per_year: 0,
		updated_at: new Date(),
		url: 'https://agency1.example.com',
	},
	{
		_id: new ObjectId('67378cf97355b5132e6845c9'),
		code: '2',
		created_at: new Date(),
		email: 'agency2@example.com',
		fare_url: '',
		is_locked: false,
		lang: 'pt',
		name: 'Agency 2',
		operation_start_date: createOperationalDate('20240101'),
		phone: '1234567890',
		price_per_km: 0,
		timezone: 'Europe/Lisbon',
		total_vkm_per_year: 0,
		updated_at: new Date(),
		url: 'https://agency2.example.com',
	},
];

export const mockAlerts: WithId<Alert>[] = [
	{
		_id: new ObjectId('67378cff4e14105248b42db8'),
		active_period_end_date: createOperationalDate('20240201'),
		active_period_start_date: createOperationalDate('20240101'),
		agency_ids: [
			'67378cebad93f9b2668ec93c',
		],
		cause: 'ACCIDENT',
		description: '',
		effect: 'SIGNIFICANT_DELAYS',
		image_url: '',
		line_ids: [],
		municipality_ids: [
			'649b4cce0ac399a0115319e3',
		],
		publish_end_date: createOperationalDate('20240201'),
		publish_start_date: createOperationalDate('20240101'),
		publish_status: 'PUBLISHED',
		route_ids: [],
		stop_ids: [
			'6476b095424adb51586dffa7',
		],
		title: '',
	},
	{
		_id: new ObjectId('67378d357a1a5250c0d2b1de'),
		active_period_end_date: createOperationalDate('20240301'),
		active_period_start_date: createOperationalDate('20240201'),
		agency_ids: [
			'67378cf97355b5132e6845c9',
		],
		cause: 'ACCIDENT',
		description: '',
		effect: 'SIGNIFICANT_DELAYS',
		image_url: '',
		line_ids: [],
		municipality_ids: [
			'6450539f8f71c3c98f1fbed0',
		],
		publish_end_date: createOperationalDate('20240301'),
		publish_start_date: createOperationalDate('20240201'),
		publish_status: 'PUBLISHED',
		route_ids: [],
		stop_ids: [
			'6476b094424adb51586dfcee',
		],
		title: '',
	},
	{
		_id: new ObjectId('67378d430263d054f4684e3d'),
		active_period_end_date: createOperationalDate('20240501'),
		active_period_start_date: createOperationalDate('20240401'),
		agency_ids: [
			'67378cebad93f9b2668ec93c',
			'67378cf97355b5132e6845c9',
		],
		cause: 'CONSTRUCTION',
		description: '',
		effect: 'DETOUR',
		image_url: '',
		line_ids: [],
		municipality_ids: [
			'649b4cce0ac399a0115319e3',
			'6450539f8f71c3c98f1fbed0',
		],
		publish_end_date: createOperationalDate('20240501'),
		publish_start_date: createOperationalDate('20240401'),
		publish_status: 'PUBLISHED',
		route_ids: [],
		stop_ids: [
			'6476b095424adb51586dffa7',
			'6476b094424adb51586dfcee',
		],
		title: '',
	},
];
