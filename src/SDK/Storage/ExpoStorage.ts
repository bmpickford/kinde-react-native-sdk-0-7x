//@ts-nocheck

/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import * as SecureStore from 'expo-secure-store';

/**
 * The Storage SDK module.
 * @module SDK/Storage
 * @version 1.1.0
 */

export default class ExpoStorage {
    async getItem() {
        const access_token = await SecureStore.getItemAsync(
            'kinde_access_token'
        );
        const expires_in = await SecureStore.getItemAsync('kinde_expires_in');
        const id_token = await SecureStore.getItemAsync('kinde_id_token');
        const refresh_token = await SecureStore.getItemAsync(
            'kinde_refresh_token'
        );
        return JSON.stringify({
            access_token,
            expires_in,
            id_token,
            refresh_token
        });
    }

    async setItem<T>(value: T) {
        const { access_token, expires_in, id_token, refresh_token } =
            typeof value === 'string' ? JSON.parse(value) : value;

        await SecureStore.setItemAsync(
            'kinde_access_token',
            String(access_token)
        );
        await SecureStore.setItemAsync('kinde_expires_in', String(expires_in));
        await SecureStore.setItemAsync('kinde_id_token', String(id_token));
        await SecureStore.setItemAsync(
            'kinde_refresh_token',
            String(refresh_token)
        );
        return true;
    }

    async clear() {
        await SecureStore.deleteItemAsync('kinde_access_token');
        await SecureStore.deleteItemAsync('kinde_expires_in');
        await SecureStore.deleteItemAsync('kinde_id_token');
        await SecureStore.deleteItemAsync('kinde_refresh_token');
        return true;
    }
}
