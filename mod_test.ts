/*
LUHNY by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

import * as luhny from './mod.ts';
import { assertEquals } from "@std/assert";

Deno.test(
	"Testing the \"validateIMEI\" function. (true case)",
	() => {
		assertEquals(luhny.validateIMEI("353879234252633"),(true));
	}
);

Deno.test(
	"Testing the \"validateIMEI\" function. (false case)",
	() => {
		assertEquals(luhny.validateIMEI("353879234252634"),(false));
	}
);