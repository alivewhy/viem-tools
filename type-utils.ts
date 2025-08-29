import { createPublicClient } from 'viem';
import {
  RpcRequestError,
  TransactionExecutionError,
  TransactionNotFoundError,
} from 'viem';

/**
 * Address — type for Ethereum/Monad addresses
 * Format: "0x..." string
 */
export type Address = `0x${string}`;

/**
 * Balance in different formats
 */
export type BalanceWei = bigint;
export type BalanceEth = string;

/**
 * Type for viem client
 */
export type Client = ReturnType<typeof createPublicClient>;

/**
 * Possible viem errors
 */
export type ViemError =
  | RpcRequestError
  | TransactionExecutionError
  | TransactionNotFoundError
  | Error; // fallback to generic Error

/**
 * Typed response for safeBalance function
 */
export type SafeBalanceResponse =
  | { ok: true; balance: BalanceWei }
  | { ok: false; error: ViemError };
