/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../assets/Loginpicture.svg';
import illustration from '../../assets/Mobile login-bro.svg';
import AuthLeftContainer from '../../components/PageSections/AuthLeftContainer';

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleShowPassword = () => {
    setShow(!show);
  };

  return (
    <SimpleGrid columns={[null, null, null, 2]} height="100vh">
      {/* Left side */}

      <AuthLeftContainer image={loginImage} illustration={illustration} />

      {/* Right side */}
      <Box pl="3vw">
        <HStack mt="3vh" ml="57%" mb="3vh">
          <Button
            color="#555555"
            variant="link"
            onClick={() => navigate(`/client/signup`)}
          >
            <Text>Don't have an account? </Text>
            <Text ml="0.3vw" color="brand.300" fontWeight="500">
              Sign up
            </Text>
          </Button>
        </HStack>
        <Stack width="70%">
          <Text align="left" fontSize="2rem">
            Login to your account
          </Text>
          <Text align="left" color="gray.300" fontSize="0.8rem">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum
          </Text>
          <form id="login-form">
            <FormControl id="username" mt="5vh" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                // value={user.username || ''}
                // onChange={handleChange('username')}
              />
            </FormControl>
            <FormControl id="password" mt="3vh" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  id="password"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter your password"
                  //   value={user.password || ''}
                  //   onChange={handleChange('password')}
                  // onKeyDown={(e) => handleEnterKey(e)}
                />
                <InputRightElement>
                  {show ? (
                    <Icon as={FiEye} onClick={handleShowPassword} />
                  ) : (
                    <Icon as={FiEyeOff} onClick={handleShowPassword} />
                  )}
                </InputRightElement>
              </InputGroup>
            </FormControl>
            {/* {errors && (
              <Text mt="1vh" align="left" color="red">
                {errors.password || errors.username}
              </Text>
            )}
            {errorMessage && (
              <Text mt="1vh" align="left" color="red">
                {errorMessage}
              </Text>
            )} */}
            <HStack mt="1.5vh" width="inherit">
              <Checkbox>Remember Me</Checkbox>
              <Spacer />
              <Button variant="link" color="brand.300">
                Forgot password?
              </Button>
            </HStack>
            <Button
              mt="3vh"
              mb="2vh"
              // type="submit"
              width="100%"
              //   isDisabled={!user.password || !user.username}
              //   bg={!user.password || !user.username ? 'brand.200' : 'brand.300'}
              //   color={
              //     !user.password || !user.username ? 'brand.300' : 'brand.200'
              //   }
              _focus={{ outline: 'none' }}
              _active={{ outline: 'none' }}
              //   isLoading={loading}
              //   onClick={handleSubmit}
            >
              Log into your account
            </Button>
            <HStack>
              <Divider />
              <Text>Or</Text>
              <Divider />
            </HStack>
            <Button
              leftIcon={<FaGoogle />}
              mt="3vh"
              mb="2vh"
              width="100%"
              _focus={{ outline: 'none' }}
              _active={{ outline: 'none' }}
            >
              Sign in with Google
            </Button>
          </form>
        </Stack>
      </Box>
    </SimpleGrid>
  );
};

export default Login;
